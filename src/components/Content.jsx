import ItemList from "./ItemList"

const Content = ({ items, handleDelete, handleCheck }) => {
    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleDelete={handleDelete}
                    handleCheck={handleCheck}
                />
            ) : (
                <p style={{ marginTop: '2rem' }}>Your List is empty</p>
            )}
        </main>
    )
}

export default Content
