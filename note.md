_type-defination-file_
@types/node
_enum--enumration_ - is a type of object where they are used to store a closely related properties

```ts
enum Status {
  Pending,
  InProgress,
  Completed,
  Failed,
}

function getStatusMessage(status: Status): string {
  switch (status) {
    case Status.Pending:
      return "The task is pending.";
    case Status.InProgress:
      return "The task is in progress.";
    case Status.Completed:
      return "The task is completed.";
    case Status.Failed:
      return "The task has failed.";
    default:
      return "Unknown status.";
  }
}

console.log(getStatusMessage(Status.InProgress)); // Output: The task is in progress.
```

_type_assertion_

Type assertion in TypeScript is a mechanism by which you can explicitly specify a type for a value when you are certain of its type, but TypeScript is unable to infer it. Type assertion is akin to type casting in other programming languages. It doesn't change the runtime type of the value, but it helps the TypeScript compiler with type checking.

```ts
  row[5] as MatchResult,
```
