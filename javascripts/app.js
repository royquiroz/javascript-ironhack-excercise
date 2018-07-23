// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  posX: 0,
  posY: 0,
  travelLog: [],
  grid: [10, 10]
};
// ======================

// ========Turn Left=======
function turnLeft(rover) {
  if (rover.direction === "N") {
    return (rover.direction = "W");
  }

  if (rover.direction === "W") {
    return (rover.direction = "S");
  }

  if (rover.direction === "S") {
    return (rover.direction = "E");
  }

  if (rover.direction === "E") {
    return (rover.direction = "N");
  }
  console.log(`direccion ${rover.direction}`);
}
// =========================

// =======Turn Right=======
function turnRight(rover) {
  if (rover.direction === "N") {
    return (rover.direction = "E");
  }

  if (rover.direction === "E") {
    return (rover.direction = "S");
  }

  if (rover.direction === "S") {
    return (rover.direction = "W");
  }

  if (rover.direction === "W") {
    return (rover.direction = "N");
  }
  console.log(`direccion ${rover.direction}`);
}
// ==========================

// =======Move Forward=======
function moveForward(rover) {
  if (rover.direction === "N") {
    if (rover.posY === rover.grid[1]) {
      return rover.posY;
    }
    return rover.posY++;
  }

  if (rover.direction === "E") {
    if (rover.posX === rover.grid[0]) {
      return rover.posX;
    }
    return rover.posX++;
  }

  if (rover.direction === "S") {
    if (rover.posY === 0) {
      return rover.posY;
    }
    return rover.posY--;
  }

  if (rover.direction === "W") {
    if (rover.posX === 0) {
      return rover.posX;
    }
    return rover.posX--;
  }
  console.log(`posicion ${rover}`);
}
// ======================

// =======Move Backward=======
function moveBackward(rover) {
  if (rover.direction === "N") {
    if (rover.posY === 0) {
      return rover.posY;
    }
    return rover.posY--;
  }

  if (rover.direction === "E") {
    if (rover.posX === 0) {
      return rover.posX;
    }
    return rover.posX--;
  }

  if (rover.direction === "S") {
    if (rover.posY === rover.grid[1]) {
      return rover.posY;
    }
    return rover.posY++;
  }

  if (rover.direction === "W") {
    if (rover.posX === rover.grid[0]) {
      return rover.posX;
    }
    return rover.posX++;
  }
  console.log(`posicion ${rover}`);
}
// ======================

// =======Commands=======
function commands(commands) {
  commands = commands.split("");
  console.log(commands);

  for (let i = 0; i < commands.length; i++) {
    if (
      commands[i] === "f" ||
      commands[i] === "r" ||
      commands[i] === "l" ||
      commands[i] === "b"
    ) {
      if (commands[i] === "f") {
        moveForward(rover);
      }

      if (commands[i] === "r") {
        turnRight(rover);
      }

      if (commands[i] === "l") {
        turnLeft(rover);
      }

      if (commands[i] === "b") {
        moveBackward(rover);
      }

      travel(rover);
    } else {
      console.log("Comando no valido: ", commands[i]);
    }
  }
}
// =========================

// =======Travel Log=======
function travel(rover) {
  return rover.travelLog.push(`X: ${rover.posX}, Y: ${rover.posY}`);
}
// =======================
