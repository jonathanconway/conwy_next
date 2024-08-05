export function ifThen<T>(conditional?: boolean, ifTrue?: T) {
  return conditional ? ifTrue : null;
}
