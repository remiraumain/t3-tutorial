import { User } from "@clerk/nextjs/dist/api";

export const fliterUserForClient = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};
