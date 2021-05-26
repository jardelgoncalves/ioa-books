/* eslint-disable @typescript-eslint/no-explicit-any */
type AppProps = {
  Component: React.FC;
  props: any;
};

export default function App({ Component, props }: AppProps) {
  return <Component {...props} />;
}
