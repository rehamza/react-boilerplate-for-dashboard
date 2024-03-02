// APIs call Documentations in the form of code we are using react query and we created a CRUD dynamic hooks
// ans in each hook you have to send url , and isToken , data that depends on Hooks arguments

// 1.  get single item using useGetQuery

// const FetchSingleItem = ({ itemId }) => {
//     const { data, error, isLoading } = useGetQuery(
//       ['fetchSingleItem', itemId],
//       `/items/${itemId}`,
//       {},
//       {
//         onError: (err) => alert(`Error fetching item: ${err.message}`),
//       }
//     );

//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error occurred: {error.message}</div>;

//     return (
//       <div>
//         <h3>{data.name}</h3>
//         <p>{data.description}</p>
//       </div>
//     );
//   };

// 2.  get list using useGetQuery with pagination and filters

// const FetchItemsList = ({ page, pageSize, filter }) => {
//     const queryKey = ['fetchItemsList', page, pageSize, filter];
//     const queryParams = { page, pageSize, filter };
//     const { data, error, isLoading } = useGetQuery(
//       queryKey,
//       `/items`,
//       queryParams,
//       {
//         keepPreviousData: true,
//         onError: (err) => alert(`Error fetching items: ${err.message}`),
//       }
//     );
//     if (isLoading) return <div>Loading...</div>;
//     if (error) return <div>Error occurred: {error.message}</div>;

//     return (
//       <ul>
//         {data.items.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     );
//   };

// simple list fetching

// const {
//     data: list,
//     error,
//     isLoading,
//   } = useGetQuery([queryKey.menuManager.menu.Menus], endpoints.menuManager.menu.list);

// 3.  create new item using useCreateMutation

// const CreateItemForm = () => {
//     const createMutation = useCreateMutation('/items', {
//       onSuccess: () => alert('Item created successfully'),
//       onError: (err) => alert(`Error creating item: ${err.message}`),
//     });

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const formData = new FormData(event.target);
//       const newItem = Object.fromEntries(formData.entries());
//       createMutation.mutate(newItem);
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input name="name" type="text" placeholder="Name" required />
//         <textarea name="description" placeholder="Description" required />
//         <button type="submit">Create</button>
//       </form>
//     );
//   };

// 4.  Update item using useUpdateMutation

// const UpdateItemForm = ({ itemId, initialData }) => {
//     const updateMutation = useUpdateMutation(`/items/${itemId}`, true, {
//       onSuccess: () => alert('Item updated successfully'),
//       onError: (err) => alert(`Error updating item: ${err.message}`),
//     });

//     const handleSubmit = (event) => {
//       event.preventDefault();
//       const formData = new FormData(event.target);
//       const updatedItem = Object.fromEntries(formData.entries());
//       updateMutation.mutate(updatedItem);
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <input name="name" type="text" defaultValue={initialData.name} required />
//         <textarea name="description" defaultValue={initialData.description} required />
//         <button type="submit">Update</button>
//       </form>
//     );
//   };

// 5.  Delete item using useDeleteMutation

// const DeleteItemButton = ({ itemId }) => {
//     const deleteMutation = useDeleteMutation(`/items/${itemId}`, {
//       onSuccess: () => alert('Item deleted successfully'),
//       onError: (err) => alert(`Error deleting item: ${err.message}`),
//     });

//     const handleDelete = () => {
//       if (window.confirm('Are you sure you want to delete this item?')) {
//         deleteMutation.mutate({ id: itemId });
//       }
//     };

//     return <button onClick={handleDelete}>Delete</button>;
//   };
