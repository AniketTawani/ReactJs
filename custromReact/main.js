function customRender(domElement,react){
    /* not so optimal way
    const tag = document.createElement('react.type');
    tag.innerHTML = react.children;
    tag.setAttribute('href',react.props.href);
    tag.setAttribute('target',react.props.target);
    domElement.appendChild(tag);
    */

    // more optimal way:
    const tag = document.createElement('react.type');
    tag.innerHTML = react.children;
    for (const key in react.props) {
        tag.setAttribute(key,react.props[key]);
    }
    domElement.appendChild(tag);
}


const react = {
    type:'a',
    props:{
        href : 'https://google.com',
        target : '_blank'
    },
    children:'Go to google website!'
}

const domElement = document.getElementById('root');
customRender(domElement,react);