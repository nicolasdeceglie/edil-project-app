import axios from "axios";
import useSWR from "swr";




const useGet = (url, id = 0) => {
    const fetcher = (url) => axios.get(url).then(result => result.data);

    let finalUrl = url;
    if(id>0){
        finalUrl += ("/" + id);
    }

    const {data, error, mutate} = useSWR (finalUrl, fetcher);
    return {
        data : data,
        error: error,
        isLoading: !error && !data,
        mutate: mutate

    }

}
const useGetToken = (url, token, id = 0) => {
    const fetcher = (url) => axios.get(url, { headers: {  Authorization: `Bearer ${token}`} }).then((response) => response.data);

    let finalUrl = url;
    if(id>0){
        finalUrl += ("/" + id);
    }

    const {data, error, mutate} = useSWR (finalUrl, fetcher);

    return {
        data : data,
        error: error,
        isLoading: !error && !data,
        mutate: mutate

    }

}


// FINE - UseGet

// INIZIO - UsePut -> Hook per modifica dati
const usePut = (url, token) => {
    
    const header = {
        headers: { Authorization: `Bearer ${token}` }
    };
    // usePut restituisce una funzione da restituire in fase di submit
    return (id, data, successFn) => {   
        const finalUrl = url + "/" + id; // Data -> l'oggetto con i dati da salvare; successFn -> la funzione da eseguire nel then
        axios.put(finalUrl, data, header).then(result => {
            if(result.data){
                successFn(); // Se il salvataggio va a buon fine il "then" eseguirà òa funzione successFn
            }
        });
    }
}
const usePutProject = (url, token, id) => {
    const finalUrl = url + "/" + id;
    const header = {
        headers: { Authorization: `Bearer ${token}` }
    };
    // usePut restituisce una funzione da restituire in fase di submit
    return ( data, successFn) => {   
         // Data -> l'oggetto con i dati da salvare; successFn -> la funzione da eseguire nel then
        axios.put(finalUrl, data, header).then(result => {
            if(result.data){
                successFn(); // Se il salvataggio va a buon fine il "then" eseguirà òa funzione successFn
            }
        });
    }
}

// Fine - UsePut

const usePost = (url, token) => {
    const header = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    return (data, successFn) => {
        axios.post(url, data, header).then(result=> {
            if(result.data){
                successFn();
            }
        })
    }
}

const useDelete = (url, token) => {
    
    const header = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return (id, successFn) => {
        const finalUrl = url + '/' + id;
        axios.delete(finalUrl, header).then(result => {
            if(result.data) {
                successFn();
            }
        })
    }
}
const useDeleteProject = (url, id, token) => {
    const finalUrl = url + '/' + id;
    const header = {
        headers: { Authorization: `Bearer ${token}` }
    };
    return ( successFn) => {
        
        axios.delete(finalUrl, header).then(result => {
            if(result.data) {
                successFn();
            }
        })
    }
}

 
export {useGet, useGetToken ,usePut, usePost, useDelete, usePutProject, useDeleteProject};