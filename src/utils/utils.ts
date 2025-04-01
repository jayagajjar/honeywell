export const formatDate=(datetime)=>{
    return new Date(datetime).toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      })
}