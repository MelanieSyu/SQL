class DAL {
    create = async (data) => {
        console.log("create: ", data);  
    }

    update = async (data) => {
        console.log("update: ", data);
    }

    delete = async (data) => {
        console.log("delete: ", data);
    }

    read = async (data) => {
        console.log("read: ", data);  
    }
}

export default DAL;