type OwnProps = {
    children?: React.ReactNode;
    as: React.ElementType;
};

const Tag: React.FC<OwnProps> = ({ children, as: TagName, ...props }) => {
    return <TagName {...props}>{children}</TagName>;
};
export default Tag;
