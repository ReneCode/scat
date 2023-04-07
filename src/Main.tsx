import { Container, Sprite, Stage, Text } from "@pixi/react";
import * as PIXI from "pixi.js";
import { useMemo } from "react";
import useResize from "./hooks/Resize";

import cardS9 from "./cards/spades_9.png";
import cardHk from "./cards/hearts_king.png";
import cardC8 from "./cards/clubs_8.png";
import cardBack from "./cards/back.png";

const stageOptions = {
  antialias: true,
  autoDensity: true,
  backgroundColor: 0xefefef,
};

function Main() {
  const size = useResize();

  const blurFilter = useMemo(() => new PIXI.BlurFilter(0), []);

  return (
    <Stage width={size.width} height={size.height - 3} options={stageOptions}>
      <Sprite image={cardS9} x={100} y={50} anchor={{ x: 0, y: 0 }} />
      <Sprite image={cardHk} x={400} y={50} anchor={{ x: 0, y: 0 }} />
      <Sprite image={cardC8} x={700} y={50} anchor={{ x: 0, y: 0 }} />

      <Sprite image={cardBack} x={100} y={450} anchor={{ x: 0, y: 0 }} />
      <Sprite image={cardBack} x={400} y={450} anchor={{ x: 0, y: 0 }} />
      <Sprite image={cardBack} x={700} y={450} anchor={{ x: 0, y: 0 }} />

      <Container x={10} y={10}>
        <Text
          style={
            new PIXI.TextStyle({
              fontSize: 16,
            })
          }
          text="Hello World"
          anchor={{ x: 0, y: 0 }}
          filters={[blurFilter]}
        />
      </Container>
    </Stage>
  );
}

export default Main;
