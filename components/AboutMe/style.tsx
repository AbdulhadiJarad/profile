
const style: { [key: string]: React.CSSProperties } = {
    root: {
        // 'position': 'relative',
        'height': 'auto',
        width: '100%',
        marginBottom: '100px'
    },
    intro: {
      
    },
    mainInfo: {
        fontSize: 'clamp(40px, 8vw, 80px)'
    },
    backImage: {
        position: "absolute",
        right: -20,
        top: 8,
        border: "solid #ccd6f6 2px",
    },
    myNameIs: {
        'color': '#ccd6f6', 
        display: 'block',
        fontSize: '4vmin',
        fontWeight: 'clamp(22px, 12vw, 80px'
    },
    imageContainer: {
        borderRadius: "5px", overflow: "hidden"
    },
    summary: {
        maxWidth: '100%',
        color: 'rgb(136, 146, 176)',
        fontSize: '18px',
        margin:'0px auto'
    },
    avatar: {
        borderRadius: '20px'
    }
}
export { style };