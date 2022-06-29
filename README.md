### Shopping cart requirements
1. Display the total number of items in the shopping cart.
2. Display the total price for all the items in the shopping cart.
3. Display `Clear shopping cart` button that removes all items from the shopping cart.
    1. If the shopping cart is empty, then the `Clear shopping cart` button is disabled.
4. Display a list of all items in the shopping cart and for each item:
    1. Display item name.
    2. Display item quantity.
    3. Display price for one unit of the item.
    4. Display total price for all units of the item.
    5. Display `Change quantity` button that displays quantity editing view.
    6. Display `Remove` button.
    7. When user clicks on `Change quantity` button, display quantity editing view:
        1. Display total price for all units of this item.
        2. Display editable input field with quantity value for the item.
        3. Display `Add one` button that adds one more item to the total quantity for the item.
        4. Display `Remove one` button that removes one item from the total quantity for the item.
            1. If quantity is `0`, then `Remove one` button is disabled.
        5. Display `Save` button that:
            1. Updates:
            2. Total quantity for the item.
            3. Total number of items for the entire shopping cart.
            4. Total price for the entire shopping cart.
            5. Hides quantity editing view.
        6. If no changes were made, then `Save` button is disabled.
        7. Display `Cancel` button that discards any changes and hides quantity editing view.
    8. When user clicks on `Remove` button, then remove item from the shopping list and update:
        1. Total number of items for the entire shopping cart.
        2. Total price for the entire shopping cart.