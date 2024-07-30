import bcrypt from 'bcrypt';

const salt = 10;

// password encryption
export const passwordHash = (password: string) => {
  const saltRound = bcrypt.genSaltSync(salt);
  return bcrypt.hashSync(password, saltRound);
};

// password compare
export const comparePassword = (password: string, hashedPassword: string) => {
  return bcrypt.compareSync(password, hashedPassword);
};
