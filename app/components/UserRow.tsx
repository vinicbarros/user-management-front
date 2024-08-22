import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

interface UserRowProps {
  user: IUser;
}

export const UserRow = ({ user }: UserRowProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.username}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.phone}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.address.city}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          {user.company.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
          <EllipsisHorizontalIcon
            className="size-5 text-primary hover:cursor-pointer"
            onClick={handleIconClick}
          />
        </td>
      </tr>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="flex flex-col bg-white p-6 rounded-md max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">
              {user.name}
              {"'"}s additional info
            </h2>
            <p>
              <strong>Website:</strong> {user.website}
            </p>
            <p>
              <strong>Street:</strong> {user.address.street}
            </p>
            <p>
              <strong>Catch Phrase:</strong> {user.company.catchPhrase}
            </p>
            <p>
              <strong>Business Summary:</strong> {user.company.bs}
            </p>

            <button
              className="mt-4 bg-primary text-white py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};
