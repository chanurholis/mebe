import { Footer } from "antd/lib/layout/layout"
import { FC } from "react";

interface IProps {
    label: string;
}

const FooterLayout: FC<IProps> = ({ label }) => {
    return (
        <>
            <Footer style={{ textAlign: 'center' }}>{label}</Footer>
        </>
    )
}

export default FooterLayout