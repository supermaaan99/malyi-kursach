type UserMedia = {
  audio?: boolean;
  video?: {
    facingMode: 'enviroment' | 'user';
  };
};

export { UserMedia };
