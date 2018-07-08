// @flow

const receivingInfromation = (dataArray: Array<{ 
    id: string, 
    title: string, 
    author: string, 
    text: string, 
    textHTML: string, 
    language: string, 
    level: string,
    words: string
    }>, title: string) =>
        dataArray.reduce((prev, curr) => {
            return (prev.indexOf(curr[title]) < 0 ?
                [...prev, curr[title]] :
                prev);
        }, []);

export default receivingInfromation;