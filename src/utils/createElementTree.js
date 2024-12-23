
export function createElementTree(treeData) {
    if(typeof treeData !== 'object' || !treeData){return}
    else{
        try{
            const element = document.createElement(treeData.tag)
    
            if (treeData.className) element.className = treeData.className
            if (treeData.id) element.id = treeData.id
            if (treeData.textContent) element.textContent = treeData.textContent  
            if (treeData.attributes) {
            Object.entries(treeData.attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
            }  
            if (treeData.children) {
            treeData.children.forEach(child => {
                const childElement = createElementTree(child)
                element.appendChild(childElement)
            });
            }
            return element;

        }catch(err){
            console.error(err)
        }
    }
    
  }