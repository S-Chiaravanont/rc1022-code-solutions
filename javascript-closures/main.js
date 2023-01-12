function graduate(credential) {
  function accredit(fullName) {
    return `${fullName}, ` + credential;
  }
  return accredit;
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log('medicalSchool:', medicalSchool('Michael Jackson'));
console.log('lawSchool:', lawSchool('O.J. Simpson'));
