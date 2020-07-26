const fs = require('fs')
const path = require('path')
const OSS = require('ali-oss')
const env = require('./.env')

const { region, accessKeyId, accessKeySecret, bucket } = env;

const client = new OSS({
  region,
  accessKeyId,
  accessKeySecret,
  bucket,
});

const distPath = path.resolve(__dirname, './build');

async function clean() {
  console.log('[*] Getting file list');
  const fileList = await client.list();
  if (fileList.objects) {
    console.log('[*] Deleting old files');
    await client.deleteMulti(fileList.objects.map(x => x.name));
  }
}

async function deploy(subpath = '') {
  const dir = await fs.promises.readdir(`${distPath}${subpath}`);
  for (i of dir) {
    const stat = await fs.promises.stat(path.resolve(`${distPath}${subpath}`, i));

    if (stat.isFile()) {
      const fileStream = fs.createReadStream(path.resolve(`${distPath}${subpath}`, i));
      console.log(`Uploading: ${subpath}/${i}`);
      const result = await client.putStream(`${subpath}/${i}`, fileStream);
    } else if (stat.isDirectory()) {
      await deploy(`${subpath}/${i}`);
    }
  }
}

async function publish() {
  await clean();
  await deploy();
}

publish();