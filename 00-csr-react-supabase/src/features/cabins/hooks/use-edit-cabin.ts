import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

import { createEditCabin } from '@/services/api-cabins';

export function useEditCabin() {
  const queryClient = useQueryClient();

  type MutationVariables = {
    newCabin: {
      name: string;
      max_capacity: number;
      regular_price: number;
      discount: number;
      description: string;
      image: File;
    };
    id?: string | null;
  };

  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: ({ newCabin, id }: MutationVariables) => {
      // Ensure `id` is either a string or undefined
      if (id === null) {
        throw new Error('ID cannot be null');
      }
      return createEditCabin(newCabin, id);
    },
    onSuccess: () => {
      toast.success('Cabin successfully edited');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err: any) => toast.error(err.message),
  });

  return { isEditing, editCabin };
}