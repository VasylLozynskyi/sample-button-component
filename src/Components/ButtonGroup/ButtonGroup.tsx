import "./buttongroup.scss"

interface IGroup {
  children?: React.ReactNode,
  className?: string,
  vertical?: boolean,
}

export default function ButtonGroup({
  children,
  className,
  vertical,
  ...attrs
}: IGroup) {
  return (
    <>
      <div
        className={`btn-group ${className} ${vertical && "vertical"}`}
        {...attrs}
      >
        {children}
      </div>
    </>
  );
}
