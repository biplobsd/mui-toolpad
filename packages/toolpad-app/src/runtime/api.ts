import { QueryClient } from '@tanstack/react-query';
import { createRpcApi } from '../rpcClient';
import type { ServerDefinition } from '../server/runtimeRpcServer';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      networkMode: 'always',
    },
    mutations: {
      networkMode: 'always',
    },
  },
});

export default createRpcApi<ServerDefinition>(
  queryClient,
  new URL(`${process.env.BASE_URL}/api/runtime-rpc`, window.location.href),
);
