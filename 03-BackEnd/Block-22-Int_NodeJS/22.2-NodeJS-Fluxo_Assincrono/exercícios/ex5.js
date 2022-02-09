const fs = require('fs').promises;

async function arrayToFile() {
  const strings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']

  const creatFiles = strings.map((str, index) =>  
    fs.writeFile(`./file${index+1}.txt`, str)
  );

  await Promise.all(creatFiles);
  const fileNames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt',
  ];

    const fileContents = await Promise.all(
      fileNames.map((filename) => fs.readFile(filename, 'utf-8')));
    
    const newFileContent = fileContents.join(' ');
    await fs.writeFile('./fileAll.txt', newFileContent);
}

arrayToFile();
