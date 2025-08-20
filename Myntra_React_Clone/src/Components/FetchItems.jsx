import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemActions } from "./Store/ItemsSlice";
import { FetchActions } from "./Store/FetchLoaderStatus";

const FetchItems = () => {
  const FetchStatus = useSelector((store) => store.FetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (FetchStatus.FetchDone) return;
    {
      /*agr apko data mil gya ha tu yaha sa nikal jao   */
    }

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchActions.MarkFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(FetchActions.MarkFetchDone());
        dispatch(FetchActions.MarkFetchingFinished());
        dispatch(ItemActions.AddInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [FetchStatus]);

  return <div></div>;
};

export default FetchItems;
