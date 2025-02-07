import dynamic from "next/dynamic";

const NotFoundDynamic = dynamic(() =>
  import("./components/NotFound").then((module) => module.NotFound)
);

export default function NotFoundPage() {

    return (
      <div>
        <NotFoundDynamic />
      </div>
    );
}