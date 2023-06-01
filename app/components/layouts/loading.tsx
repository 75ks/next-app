import ReactLoading from "react-loading";

type Props = {
  text: string
}

const Loading: React.FC<Props> = (props) => {
  return (
    <div>
      <ReactLoading
        type="spin"
        color="#A7F3D0"
        height="50px"
        width="50px"
        className="mx-auto"
      />
      <p className="text-center mt-2">{props.text}</p>
    </div>
  );
  
}

export default Loading;