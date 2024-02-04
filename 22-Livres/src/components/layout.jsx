import Navigation from "./navigation";

export default function Layout({children}){
  return (
    <>
    <Navigation/>
    <div>{children}</div>
    </>
  )
}