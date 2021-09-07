declare namespace SignInScreenNamespace {
  export interface Inputs {
    email: string;
    password: string;
  }

  export interface HandleInputChangeFunctionArgs {
    key: keyof Inputs;
    value: string;
  }
}
