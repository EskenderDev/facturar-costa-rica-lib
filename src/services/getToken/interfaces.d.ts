export type postTokenOptions = {
  client_id: string;
  grant_type: string;
  client_secret?: string;
  username?: string;
  password?: string;
}

export type prostRefreshTokenOptions = {
  client_id: string;
  grant_type: string;
  refresh_token: string;
}
