import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
  // this hook used to make responsive from xs to md => cols={matchDownMd ? 5 : item.cols }


 const IsMobile = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("md"));
};
export default IsMobile;
