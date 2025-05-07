import React, { ComponentType, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../store/store';
import { auth as authActionCreator } from '../../store/actions';
import { DataStatus } from '../../common/enums/app/data-status.enum';
import { Routes } from '../../routes';
import Loader from '../Loader/Loader';

interface Props {
  component: ComponentType;
}

export const PrivateRoute: React.FC<Props> = ({ component: ReactComponent }) => {
  const { auth, status } = useSelector((state: IRootState) => ({
    auth: state.auth.auth,
    status: state.auth.status,
  }));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(authActionCreator.getUser({}));
  }, [dispatch]);

  if ([DataStatus.PENDING, DataStatus.IDLE].includes(status)) {
    return <Loader />;
  }

  if ([DataStatus.SUCCESS, DataStatus.ERROR].includes(status) && !auth) {
    return <Navigate to={Routes.SignIn.path} />;
  }

  return <ReactComponent />;
};
