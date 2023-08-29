import { Box } from "@mui/material";
import styled from "styled-components";
import { TabPanel, TabContext } from "@mui/lab";
import SigninComponent from "@components/signin/Signin.component";
import ForgetComponent from "@components/signin/Forget.component";
import { useState } from "react";
import { TabNames } from "@components/signin/interface/signin.interface";

const TP = styled(TabPanel)<{ $show?: string }>`
  width: 100%;
  height: 100vh;
  padding: 0;
  display: ${(props) => props.$show};
  justify-content: center;
  align-items: center;
`;

export default function Signin() {
  const [tab, useTab] = useState(TabNames.signin);
  const memoFlexType = (tabName: TabNames) =>
    tab === tabName ? "flex" : "none";
  return (
    <Box>
      <TabContext value={tab}>
        <TP value={TabNames.signin} $show={memoFlexType(TabNames.signin)}>
          <SigninComponent switchTab={useTab} />
        </TP>
        <TP value={TabNames.forget} $show={memoFlexType(TabNames.forget)}>
          <ForgetComponent switchTab={useTab} />
        </TP>
      </TabContext>
    </Box>
  );
}
