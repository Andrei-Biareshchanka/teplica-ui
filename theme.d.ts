declare module '@mui/material/styles' {
  interface Theme {
    zIndex: {
      appBar: number;
      drawer: number;
    };
  }
  
  interface ThemeOptions {
    zIndex?: {
      appBar?: number;
      drawer?: number;
    };
  }
}