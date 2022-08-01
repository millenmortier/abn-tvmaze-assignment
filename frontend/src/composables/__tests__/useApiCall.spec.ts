import { useApiCall } from '../useApiCall';

describe('useApiCall', () => {
  it('should set all returned values correctly', () => {
    const { isFetching, error, value } = useApiCall<number>(async () => 42);

    expect(isFetching.value).toBe(false);
    expect(error.value).toBe(false);
    expect(value.value).toBe(undefined);
  });
});
