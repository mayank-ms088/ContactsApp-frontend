import { faker } from "@faker-js/faker";
// utils
import { mockImgAvatar } from "../utils/mockImages";

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(index + 1),
  name: faker.name.findName(),
  company: faker.company.companyName(),
  mobile: faker.phone.phoneNumber("##########"),
  // email: faker.phone.phoneNumber(),
  // isVerified: faker.datatype.boolean(),
  // status: sample(['active', 'banned']),
  // role: sample([
  //   'Leader',
  //   'Hr Manager',
  //   'UI Designer',
  //   'UX Designer',
  //   'UI/UX Designer',
  //   'Project Manager',
  //   'Backend Developer',
  //   'Full Stack Designer',
  //   'Front End Developer',
  //   'Full Stack Developer'
  // ])
}));
users.push({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(users.length + 1),
  name: "Mayank Sharma",
  company: "Contacs APP Inc",
  mobile: "9027350941",
});
users.push({
  id: faker.datatype.uuid(),
  avatarUrl: mockImgAvatar(users.length + 1),
  name: "Sharma Mayank",
  company: "APPLE Inc",
  mobile: "8881766752",
});
export default users;
