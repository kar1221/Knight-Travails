import Coordinate from "./Coordinate";

function KnightsTravails(
  startPoint: Coordinate,
  endPoint: Coordinate
): Array<Coordinate> | null {
  const possibleMoves: Coordinate[] = [
    new Coordinate(2, 1),
    new Coordinate(1, 2),
    new Coordinate(2, -1),
    new Coordinate(1, -2),
    new Coordinate(-1, -2),
    new Coordinate(-2, -1),
    new Coordinate(-2, 1),
    new Coordinate(-1, 2),
  ];

  const queue: Coordinate[][] = [[startPoint]];
  const visited: Coordinate[] = [];

  while (queue.length > 0) {
    const currentQueue = queue.shift()!;

    const currentPosition = currentQueue[currentQueue.length - 1];

    if (currentPosition.isEqualTo(endPoint)) return currentQueue;

    for (const deltaMove of possibleMoves) {
      const nextMove = currentPosition.add(deltaMove);

      if(nextMove.column > 7 || nextMove.column < 0 || nextMove.row > 7 || nextMove.row < 0) continue;

      const isVisited = visited.some(coor => coor.isEqualTo(nextMove));
      
      if(isVisited) continue;

      queue.push([...currentQueue, nextMove])
      visited.push(currentPosition);
    }
  }

  return null;
}

function printPath(path: Coordinate[] | null) {
  if(!path) {
    console.log("No possibly move found.");
    return;
  }

  console.log(`You made it in ${path.length} move(s)!`);

  let tempString = "";
  for(let x = 0; x < path.length; x++) {
    tempString += x === path.length - 1 ? `${path[x].toString()}` : `${path[x].toString()} -> `
  }

  console.log(tempString);
}

printPath((KnightsTravails(new Coordinate(0, 0), new Coordinate(7, 7))));

