// Numeric enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// test code
console.log(
  "Numeric Enums : \n" +
    Direction.Up +
    " | " +
    Direction.Down +
    " | " +
    Direction.Left +
    " | " +
    Direction.Right
);

// String enums
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// test code
console.log(
  "\nString Enums : \n" +
    DirectionString.Up +
    " | " +
    DirectionString.Down +
    " | " +
    DirectionString.Left +
    " | " +
    DirectionString.Right
);

// Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

// test code
console.log(
  "\nHeterogeneous Enums : \n" +
    BooleanLikeHeterogeneousEnum.No +
    " | " +
    BooleanLikeHeterogeneousEnum.Yes
);
