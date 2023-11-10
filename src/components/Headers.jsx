// import React from 'react'

import { Button, Text } from "@chakra-ui/react";

function Headers() {
  return (
    <div style={{ border: "solid black", width: 1000, height: 300 }}>
      <Text fontSize={60} fontFamily={""} letterSpacing={5}>
        {" "}
        DOMINA EL TERRENO
      </Text>
      <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <Button border={"solid 3px"} borderRadius={10} width={200} padding={10}>
          Ver detalles
        </Button>
        <Button border={"solid 3px"} borderRadius={10} width={200} padding={10}>
          Ver Videos
        </Button>
      </div>
    </div>
  );
}

export default Headers;
