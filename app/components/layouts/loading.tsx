import ReactLoading from "react-loading";

export default function Loading(props: any) {
  return (
    <div>
      <ReactLoading
        type="spin"
        color="#ebc634"
        height="50px"
        width="50px"
        className="mx-auto"
      />
      <p className="text-center mt-2">{props.text}</p>
    </div>
  );
  
}
