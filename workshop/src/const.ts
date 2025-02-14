const ROLES = {
	ADMIN: "ADMIN",
	USER: "USER",
	MANAGER: "MANAGER",
} as const;

type Action =
	| { type: "ADD"; payload: number }
	| { type: "DELETE"; payload: number };


const action = {
  type: "ADD",
  payload: 100,
} satisfies Action;

