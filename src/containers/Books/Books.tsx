import React, { FC, useCallback } from 'react';
import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';

import { useDispatch, useSelector } from 'state';
import { booksActions, booksSelectors } from 'state/Books';

import { Book, SortableItem } from 'components';

import s from './Books.module.css';

const Books: FC = () => {

  const dispatch = useDispatch();
  const list = useSelector(booksSelectors.getList);

  const sensors = useSensors(
    useSensor(PointerSensor),
  );

  const onDragEnd = useCallback((event) => {
    const { active, over } = event;

    const oldIndex = list.findIndex(book => book.id === active.id);
    const newIndex = list.findIndex(book => book.id === over.id);

    const resList = arrayMove(list, oldIndex, newIndex);
    dispatch(booksActions.refreshList(resList));
  }, [list, dispatch]);

  const onRemove = useCallback((name: string) => {
    const resList = list.filter(book => book.name !== name);
    dispatch(booksActions.refreshList(resList));
  }, [list, dispatch]);

  return (
    <div className={s.container}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={list}
          strategy={horizontalListSortingStrategy}
        >
          {list.map((book) => (
            <SortableItem key={book.id} id={book.id}>
              <Book
                onRemove={onRemove}
                {...book}
              />
            </SortableItem>

          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export { Books };
