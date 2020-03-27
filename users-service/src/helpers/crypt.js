import bcrypt from 'bcryptjs';

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

const passwordCompareSync = ({ passwordToTest, passwordHash }) => bcrypt.compareSync(passwordToTest, passwordHash);

module.exports = {
    hashPassword,
    passwordCompareSync
}; 