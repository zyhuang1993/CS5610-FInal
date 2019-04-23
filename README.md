# CS5610Final
This is the final project for CS 5610. Please open the url: https://webdev19spring-final-project.herokuapp.com.


## Testing

## 1. 
For anonymous users, you can only view the details for movies listed on homepage or on popular-movies page. For the first one, just click the ‘More info’ to jump to movie details. In the details page, you can have the main information for that movie and the rate for that movie. Besides that, you cannot do nothing more. For the second one, just click the ‘Popular’ in the navbar to jump to popular-movies list. You can then do the same thing you do at the homepage.
## 2. 
To register, just click ‘login’ in the navbar and then you’ll jump to login page. Click ‘Register’ button again to jump to register page. The username, password, url for your photo and user type are all required. Once register, you’ll start your journey at profile page.
## 3. 
To login, just click ‘login’ button at top right of the navbar. 
For all types of authenticated users, you can edit your profile in your profile page. You can change your username, password, your profile photo, and even your type here. But be careful, you’ll always have to type your password here before updating even if you do not want to change your password. This is due to the bcrypt, we’re sorry for the inconvenience.
To log out, just click ‘Log out’ button at top right of the navbar.
## 4. 
For Administrator, use ‘admin’ and ‘admin’ as your username and password. You can manage other unpaid users via clicking ‘Manage User’ to jump to that page. You can follow/unfollow a user here as there’s a ‘Follow’ (Or ‘Unfollow’ if you’ve already followed this user) button. If you want to delete that user, just click the ‘Delete’ button at the bottom of the user’s information card. You can visit the user’s homepage via clicking the user’s name on the card and you’ll navigate to the homepage for that user. If you want to delete reviews, you can click ‘Review History’ to jump to the user’s reviews list and then you can delete his/her reviews by clicking the ‘Delete’ button. Besides, you can go to details page for a movie and you’ll see a list of reviews with a ‘Delete’ button under each review, just click the button and the review will be deleted. Admin user can also do other things just like a Paid User does, below is the details.
## 5. 
For Paid User, use ‘alice’ and ‘alice’ as your username and password. Once logged in, you can see your follower-list, following-list, review history and favorite list. 
### 5.1 
To follow/unfollow others, there’re three ways to do that. First, just go to the review-list for a movie, and you can click the user’s name in each review and you’ll access his/her homepage and then you can follow/unfollow the user as there’s a button. Second, you can go to your or others’ home page and click ‘Follower’ and you’ll jump to follower-list page and you can follow/unfollow people here. Third, you can go to your or others’ home page and click ‘Following’ and you’ll jump to following-list page and you can follow/unfollow people here, too.
### 5.2
To write a review, you need to go to the details page for that movie first. If you have not written a review for this movie, you’ll see a pen icon here. Just click it and you can go to the review-new page to write your review.
### 5.3 
You can only delete your own reviews. There’re two ways to do that. First, just go to the review-list for a movie that you’ve written a review for it, and you’ll see a delete button at the bottom of your review. Second, you can go to your profile page and click ‘Review History’ and you’ll jump to your user-review page and you can delete your reviews here.
### 5.4 
As mentioned before (part 4), you can see other users’ reviews at two places. One is the review-list page for a movie, and another is other user’s ‘Review History’ page. You can like/unlike these reviews at these pages. You can see a thumbs-up/thumbs-down icon below each review. If you see a thumbs-up icon, you can click it if you like the review and you want to show your like. After that, you’ll see the icon has been changed to a thumbs-down icon. You can click it if you don’t like the review anymore and the icon will change back to thumbs-up icon again.
### 5.5 
To add a movie to your favorite list, you need to go to the details page for that movie first. If you have not added this movie to your favorite, you’ll see an unfilled heart icon here. Just click it and this movie will be added to your list. You can check this via ‘Profile’ -> ‘Favorite List’. If you want to remove the movie from the list, just go back to the details page and you’ll see a filled heart icon here. Just click it and this movie will be removed from the list.
### 5.6 
To search for a movie, just type the keywords on the navbar and click the ‘search’ button and you’ll see the results.
## 6. 
For Unpaid User, use ‘bob’ and ‘bob’ as your username and password. All you can do is the same as above for paid user. But you must watch the advertisement when you log in and each time after you do a search.
