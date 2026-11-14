export type DemoUser = {
  name: string;
  email: string;
  password: string;
};

const USER_KEY = "carcare-demo-user";
const SESSION_KEY = "carcare-demo-session";

export function saveDemoUser(user: DemoUser) {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function getDemoUser(): DemoUser | null {
  const value = window.localStorage.getItem(USER_KEY);
  if (!value) return null;

  try {
    return JSON.parse(value) as DemoUser;
  } catch {
    return null;
  }
}

export function createDemoSession(email: string) {
  window.localStorage.setItem(SESSION_KEY, email);
}
