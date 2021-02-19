import { PropsWithChildren } from "react";

type LoaderProps =
    | {
          modfedType: "vanilla";
          modfedId: string;
          modfedData?: any;
      }
    | {
          modfedType: "preact";
          modfedId: string;
          modfedData?: any;
      };

export function Loader(props: PropsWithChildren<LoaderProps>) {
    return (
        <>
            <script
                type={"text/json"}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(props.modfedData || {}).replace(/</g, "\\u003c") }}
                data-modfed-data={props.modfedId}
            />
            <div
                data-modfed-id={props.modfedId}
                data-modfed-type={props.modfedType}
            >
                {props.children}
            </div>
        </>
    );
}
