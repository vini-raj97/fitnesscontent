import Link from 'next/link'


 function Link ( {label, pathname}){
    return (
        <Link href={pathname || "/"}>{label || "link"}</Link>
    )
 }



 export {Link}