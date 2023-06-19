interface action {
  type: "Increment" | "Reset";
}
const counterReducer = (state: number, { type }: action): number => {
  if (type === "Increment") return state + 1;
  else if (type === "Reset") return 0;
  else return state;
};

export default counterReducer;
